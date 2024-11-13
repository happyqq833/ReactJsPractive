import { useContext, useEffect, useState } from "react";
import { fetchAllUser } from "../service/userServices";
import { createRoutesFromChildren } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import { Button } from "bootstrap";
import ModalAddNew from "./ModalAddNew";
import { toast } from 'react-toastify';
import "./tableUser.css";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalEditUser from "./ModalEditUser"; 
 
const TableUser = (props) => {
    const [listUser, setListUser] = useState([]);
    const [totalPages, setTotalPages] = useState("");
    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataUserEdit, setDataUserEdit] = useState({});
    const [dataUserDelete, setDataUserDelete] = useState({})
    const {theme} = props;

    useEffect(() => {
        getAllUser(1);
    }, [])

    const getAllUser = async(page) => {
        let res = await fetchAllUser(page);
        
        if(res && res.data) {
            setListUser(res.data);
            setTotalPages(res.total_pages)
        }
    };

    const handlePageClick = (event) => {
        getAllUser(+event.selected + 1);
    }
    
    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEdit(false);
        setIsShowModalDelete(false);
    }
    const handleAddNew = () => {
        setIsShowModalAddNew(true);

    }
    const handleEditUser = (user) => {
        setDataUserEdit(user);
        setIsShowModalEdit(true);
    };
    const handleDeleteUser = (user) => {
        setDataUserDelete(user);
        setIsShowModalDelete(true);
    }
    const className = 'table-' + theme;
    return (
        < >
        <div  className="my-3 add-new">
            <span>List User</span>
            <button className="btn btn-warning" onClick={() => handleAddNew()}>New</button>
        </div>
        
        <Table bordered hover className={className}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {listUser && listUser.length > 0 &&
                
                listUser.map((item, index) => {
                    return(
                        <tr key={`user-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>
                                <div className="group-btn">
                                    <button className="btn btn-success" onClick={() => handleEditUser(item)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteUser(item)}>Del</button>
                                </div>

                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </Table>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="<"
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            activeClassName='active'
        />

        <ModalAddNew
            show = {isShowModalAddNew}
            handleClose = {handleClose}
        />
        <ModalEditUser
            show = {isShowModalEdit}
            handleClose = {handleClose}
            dataUserEdit = {dataUserEdit}
        />
         <ModalDeleteUser
            show = {isShowModalDelete}
            handleClose = {handleClose}
            dataUserDelete = {dataUserDelete}
        />
        </>
    )
}

export default TableUser;