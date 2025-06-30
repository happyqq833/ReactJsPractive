import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postCreateUser } from "../service/userServices";

const ModalAddNew = (props) => {

    const {show, handleClose} = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const inputRef = useRef(null);
    
    useEffect(() => {
        if (show && inputRef.current) {
            inputRef.current.focus();
        }
    }, [show]);
  

    const handleSaveUser = async(name, job) => {
        let res = await postCreateUser(name, job);
        
        if (res && res.id){
            handleClose();
            setName("");
            setJob("");
            toast("A User is created succeed!");
            <ToastContainer />
        }
    }

    return(
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input type="text" 
                                ref={inputRef}
                                className="form-control" 
                                value={name} 
                                onChange={(event) => setName(event.target.value)} 
                                placeholder="Enter Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Job</label>
                                <input type="text" 
                                className="form-control" 
                                value={job} 
                                onChange={(event) => setJob(event.target.value)} 
                                placeholder="Job" />
                            </div>
                            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUser()}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
    
    )
}

export default ModalAddNew;