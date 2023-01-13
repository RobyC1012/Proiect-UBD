import UserRoute from "../../components/routes/UserRoute"
import { Layout, Table } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const { Header, Footer, Content } = Layout


const manageuser = () => {
    let [user, setUser] = useState([]);


    useEffect(() => {
        fetchUrl()
    }, [])



    const fetchUrl = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const { data } = await axios.get(`/api/getuser/${id}`)
        setUser(data.user)
    }



    return (
        <Layout style={{ minHeight: '100vh' }}>
            <UserRoute>
                <Content style={{ margin: '0px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        <h1>Manage {user.name}'s account</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="card-title">Personal Information</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" className="form-control" placeholder="Company" value={user.name} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control" placeholder="Last Name" value={user.name} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" placeholder="Email" value={user.email} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input type="text" className="form-control" placeholder="Phone" value={user.phone} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control" placeholder="Home Address" value={user.address} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 pr-1">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input type="text" className="form-control" placeholder="City" value={user.city} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 px-1">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <input type="text" className="form-control" placeholder="Country" value={user.country} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-1">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input type="number" className="form-control" placeholder="ZIP Code" value={user.postalCode} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="update ml-auto mr-auto">
                                            <button type="button" className="btn btn-primary btn-round" onClick={()=>{}}>Update Profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </UserRoute>
        </Layout>
    )
}

export default manageuser