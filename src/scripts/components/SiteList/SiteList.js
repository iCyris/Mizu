import React, { useState } from 'react'
import SiteItem from './SiteItem'
import siteListJson from '../../config/sites-config'
import { Input, Button } from 'antd'

export default function Sites() {
    const initList = JSON.parse(localStorage.getItem('siteList'))
    const [siteList, setSiteList] = useState(initList || siteListJson)
    const [visible, setVisible] = useState(false)
    const [viewAdd, setViewAdd] = useState(false)

    //
    const _updateLocalStorage = (newSiteList) => {
        localStorage.setItem('siteList', JSON.stringify(newSiteList))
    }

    //
    const _deleteSite = (index) => {
        const newSiteList = [...siteList]

        newSiteList.splice(index, 1)
        setSiteList(newSiteList)
        _updateLocalStorage(newSiteList)
    }
    const _handleVisible = () => {
        if (visible) {
            setVisible(false)
            setViewAdd(false)
        } else { setVisible(true) }
    }

    //
    const [newSiteName, setNewSiteName] = useState("Mizu")
    const [newSiteURL, setNewSiteURL] = useState("https://mizu.js.org")
    const [newSiteFavicon, setNewSiteFavicon] = useState("/images/icons/medium-circle.svg")
    const _showViewAdd = () => { setViewAdd(true) }
    const _hideViewAdd = () => { setViewAdd(false) }
    const _addSite = () => {
        const newSiteList = [...siteList]
        const newSiteInfo = [{
            "name": newSiteName,
            "url": newSiteURL,
            "favicon": newSiteFavicon
        }]
        newSiteList.push(...newSiteInfo)
        setSiteList(newSiteList)
        _updateLocalStorage(newSiteList)
        _hideViewAdd()
    }


    //
    return (
        <div className="mizu-sites">
            <div className="mizu-sites-header">
                <div className="adjust-site" onClick={_handleVisible}>
                    {
                        visible ? "完成" : "编辑"
                    }
                </div>
            </div>
            <div className="mizu-sites-body">
                {siteList.map((site, index) => (
                    <SiteItem
                        key = { index }
                        site = { site }
                        delete = { () => _deleteSite(index) }
                        visible = { visible }
                    />
                ))}
                {
                    visible ?
                        <div className="site-item add-site" onClick={_showViewAdd} /> : ""
                }
            </div>
            {
                viewAdd ?
                    <div className="site-add-form">
                        <div style={{ marginBottom: 16 }}>
                            <Input
                                addonBefore="Name"
                                defaultValue="Mizu"
                                onChange={(e) => {e.persist(); setNewSiteName(e.target.value)}}
                            />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <Input
                                addonBefore="URL"
                                defaultValue="https://mizu.js.org"
                                onChange={(e) => {e.persist(); setNewSiteURL(e.target.value)}}
                            />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <Input
                                addonBefore="Favicon"
                                defaultValue="/images/favicon.ico"
                                onChange={(e) => {e.persist(); setNewSiteFavicon(e.target.value)}}
                            />
                        </div>
                        <Button onClick={_addSite}>Add</Button>
                    </div> : ""
            }
        </div>
    )
}