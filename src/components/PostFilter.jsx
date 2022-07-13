import React from "react";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className="post__filter">
            <input value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={'Поиск'}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" }
                ]}
            />
        </div>
    );
};
export default PostFilter;