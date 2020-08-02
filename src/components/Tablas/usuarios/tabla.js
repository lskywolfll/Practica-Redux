import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { EyeFilled } from '@ant-design/icons';

const { Column } = Table;

export class tabla extends Component {
    static propTypes = {
        data: PropTypes.array,
        loading: PropTypes.bool
    }

    render() {
        return (
            <>
                <Table dataSource={this.props.data} rowKey="id" bordered={true} loading={this.props.loading}>
                    <Column title="Nombre" key="name" dataIndex="name" />
                    <Column title="Correo" key="email" dataIndex="email" />
                    <Column title="Website" key="website" dataIndex="website" render={(valor) => {
                        return <a href={`https://${valor}`} target="_blank" rel="noopener noreferrer">{valor}</a>
                    }} />
                    <Column title="Acciones" key="Accion" align='center' render={(valor, objeto, posicion) => (
                        <Link to={`/publicaciones/${posicion + 1}`} >
                            <EyeFilled />
                        </Link>
                    )} />
                </Table>
            </>
        )
    }
}

export default tabla
