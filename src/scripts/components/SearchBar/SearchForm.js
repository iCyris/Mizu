import React, { useState } from 'react'
import {Input, Select} from 'antd'
import configEngine from "../../config/search-engine-config"

export default () => {
    const Search = Input.Search
    const Option = Select.Option

    //
    const [engineType, setEngineType] = useState("Google")

    // Select Engine
    const engines = configEngine.map( el =>
        <Option value={ el.name } key={ el.name }>{ el.name }</Option>
    )
    const SelectEngine =  (
        <div className="select-engine">
            <Select defaultValue="Google" style={{ width: 120 }} onChange={ value => setEngineType(value) }>
                { engines }
            </Select>
        </div>
    )

    // Search Form
    const _getPreURL = (value) => {
        for (let el of configEngine) {
            if (el.name === value) return el.preURL
        }
        return false
    }
    const _handleSubmit = (value) => {
        let complete_url = _getPreURL(engineType) + value
        window.open(complete_url)
    }

    return (
        <div className="search-form">
            <Search
                addonBefore = { SelectEngine }
                placeholder = "input search text"
                onSearch = { value => _handleSubmit(value) }
                style = {{ width: 400 }}
            />
        </div>
    )
}