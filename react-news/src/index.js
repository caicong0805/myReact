import React from 'react'
import ReactDom from 'react-dom'
import ComponentHeader from './js/components/header'
import ComponentFooter from './js/components/footer'
import BodyIndex from './js/components/bodyindex'

class Index extends React.Component {
    render() {
        return (
            <div>
                <ComponentHeader />
                <BodyIndex />
                <ComponentFooter />

            </div>
        )
    }
}
ReactDom.render(<Index />, document.getElementById('root'))