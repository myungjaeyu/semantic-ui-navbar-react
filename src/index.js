import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import { Menu, Header, Icon } from 'semantic-ui-react'

export default class ExampleComponent extends Component {

    static propTypes = {
        text: PropTypes.string
    }

    state = {
        flagMenu : false
    }

    getWidth() {

        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth

            return width

    }

    updateDimensions = () => {
        this.setState({ flagMenu : this.getWidth() > 767 })
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    handleItemClick = (_, { name }) => {
        
        this.setState({ activeItem: name })
        this.getWidth() < 767 && this.setState({ flagMenu : false })
    }
  
    render() {

        const { logo, title, menu } = this.props
        const { activeItem, flagMenu } = this.state

        return (
            <div className={styles.test}>
                <Menu 
                className={styles.test_menu}
                stackable
                borderless
                >
                    <Menu.Item>

                        { logo && <img className={styles.test_title_img} src={ logo } /> }

                        <Header className={styles.test_title} as={ title.size }>
                            { title.text }
                        </Header>

                        <Icon onClick={ () => this.setState({ flagMenu : !flagMenu }) } className={styles.test_list_icon} size='big' name='list' />

                    </Menu.Item>

                    {
                        flagMenu && menu.left.map((e, i) =>
                            <Menu.Item
                            key={ i }
                            name={ e.name  }
                            active={activeItem === e.name  }
                            onClick={this.handleItemClick}
                            >
                                { e.text }
                            </Menu.Item>)
                    }

                    <Menu.Menu position='right'>
                        {
                            flagMenu && menu.right.map((e, i) =>
                                <Menu.Item
                                key={ i }
                                name={ e.name  }
                                active={activeItem === e.name  }
                                onClick={this.handleItemClick}
                                >
                                    { e.text }
                                </Menu.Item>)
                        }
                    </Menu.Menu>

                </Menu>

            </div>
        )
    }
}
