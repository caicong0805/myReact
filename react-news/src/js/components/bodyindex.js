import React from 'react'

export default class BodyIndex extends React.Component{
    render(){
        var username = ''
        return(
            <div>
                <h2>页面的主题内容</h2>
                <p>{username == ''? '用户还没登录' : '用户名' + username}</p>
                <p><input type="button" value="默认按钮" /></p>
            </div>
        )
    }
}
