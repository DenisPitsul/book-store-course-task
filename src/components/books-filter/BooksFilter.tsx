import React, { FunctionComponent } from "react";
import './BooksFilter.css';
import icons from "../../img/icons.svg";

interface BooksFilterParams {
    level: string
    query: string,
    priceOption: string
}

interface BooksFilterProps {
    filter: BooksFilterParams,
    setFilter(filter: BooksFilterParams): void;
}

const BooksFilter: FunctionComponent<BooksFilterProps> = ({filter, setFilter}) => {
    return (
        <div className="booklist-filters-container">
            <div className="booklist-filter-select-container">
                <select 
                    className="booklist-filter-select"
                    value={filter.level}
                    onChange={e => setFilter({...filter, level: e.target.value})}
                >
                    <option value="any">Any Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Middle">Middle</option>
                    <option value="Pro">Pro</option>
                </select>
            </div>
            <div className="booklist-filter-input-container">
                <input 
                    className="booklist-filter-input" 
                    placeholder="Search book by book name"
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                />
                <button type="button" className="booklist-filter-search-btn">
                    <svg className="booklist-filter-icon">
                        <use href={icons + '#icon-search'}></use>
                    </svg>
                </button>
            </div>
            <div className="booklist-filter-select-container">
                <select 
                    className="booklist-filter-select"
                    value={filter.priceOption}
                    onChange={e => setFilter({...filter, priceOption: e.target.value})}
                >
                    <option value="any">Any Price</option>
                    <option value="up_to_15">up tp $15</option>
                    <option value="15_30">$15 - $30</option>
                    <option value="from_30">$30+</option>
                </select>
            </div>
        </div>
    )
}

export default BooksFilter;