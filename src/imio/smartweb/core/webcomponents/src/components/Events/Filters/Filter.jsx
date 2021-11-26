import React, { useEffect, useCallback, useState } from "react";
import Select from "react-select";
import {useHistory } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

function Filters(props) {
    let history = useHistory();
    const queryString = require("query-string");

    const [inputValues, setInputValues] = useState(props.activeFilter);
    const [topicsFilter, setTopicsFilter] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState(null);
    const { response, error, isLoading } = useAxios({
        method: "get",
        url: "",
        baseURL: props.url,
        headers: {
            Accept: "application/json",
        },
        params: inputValues,
    });

    useEffect(() => {
        if (response !== null) {
            const optionsTopics =
                response.topics &&
                response.topics.map((d) => ({
                    value: d.token,
                    label: d.title,
                }));
            const optionsCategory =
                response.category &&
                response.category.map((d) => ({
                    value: d.token,
                    label: d.title,
                }));
            setTopicsFilter(optionsTopics);
            setCategoryFilter(optionsCategory);
        }
    }, [response]);

    const onChangeHandler = useCallback(({ target: { name, value } }) =>{
        if (value) {
            setInputValues((state) => ({ ...state, [name]: value }), [])
        } else{
            setInputValues((prevState) => {
                const state = { ...prevState };
                const { [name]: remove, ...rest } = state;
                return rest;
            });
        }
    }
    );
    const onChangeHandlerSelect = useCallback((value, action) => {
        const inputName = action.name;
        if (value) {
            setInputValues((state) => ({ ...state, [inputName]: value.value }), []);
        } else {
            setInputValues((prevState) => {
                const state = { ...prevState };
                const { [inputName]: remove, ...rest } = state;
                return rest;
            });
        }
    });

    useEffect(() => {
        history.push({
            pathname: "",
            search: queryString.stringify(inputValues),
        });

        props.onChange(inputValues);
    }, [inputValues]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onChange(inputValues);
    }
    // set default input value
    let actTopi =
        topicsFilter && topicsFilter.filter((option) => option.value === props.activeFilter.topics);

    let actCategory =
        categoryFilter &&
        categoryFilter.filter(
            (option) => option.value === props.activeFilter.category
        );
    return (
        <React.Fragment>
            <form className="r-filter" onSubmit={handleSubmit}>
                <label>
                    Recherche
                </label>
                <div className="r-filter-search">
                    <input
                        className="input-custom-class"
                        name="SearchableText" type="text"
                        value={inputValues.SearchableText}
                        onChange={onChangeHandler} />
                    <button type="submit"></button>
                </div>
            </form>

            <div className="r-filter topics-Filter">
                <label>Thématiques</label>
                <Select
                    name={"topics"}
                    className="select-custom-class library-topics"
                    isClearable
                    onChange={onChangeHandlerSelect}
                    options={topicsFilter && topicsFilter}
                    placeholder={"Toutes"}
                    value={actTopi && actTopi[0]}
                />
            </div>
            <div className="r-filter  facilities-Filter">
                <label>Catégories</label>
                <Select
                    name={"category"}
                    className="select-custom-class library-facilities"
                    isClearable
                    onChange={onChangeHandlerSelect}
                    options={categoryFilter && categoryFilter}
                    placeholder={"Toutes"}
                    value={actCategory && actCategory[0]}
                />
            </div>
        </React.Fragment>
    );
}

export default Filters;
