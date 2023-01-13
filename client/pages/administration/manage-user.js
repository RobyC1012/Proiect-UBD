import UserRoute from "../../components/routes/UserRoute"
import { Layout, Table } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { getNamedRouteRegex } from "next/dist/shared/lib/router/utils/route-regex"

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

    function getBDate() {
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        if (day < 10) 
            day = "0" + day
        if (month < 10) 
            month = "0" + month
        return `${year}-${month}-${day}`
    }

    let dateas = "2023-01-20"
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
                                                <input type="text" className="form-control" placeholder="Company" defaultValue={user.name} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control" placeholder="Last Name" defaultValue={user.lastName} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" placeholder="Email" defaultValue={user.email} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label>Roles</label>
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option>User</option>
                                                    <option>Student</option>
                                                    <option>Teacher</option>
                                                    <option>Admin</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header">
                                    <h2 className="card-title">Student Information</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control" placeholder="Home Address" defaultValue={user.address} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 pr-1">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input type="text" className="form-control" placeholder="City" defaultValue={user.city} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 px-1">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <input type="text" className="form-control" placeholder="Country" defaultValue={user.country} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-1">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input type="number" className="form-control" placeholder="ZIP Code" defaultValue={user.postalCode} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Parent Initial</label>
                                                <input type="text" className="form-control" placeholder="Parent Initial" defaultValue="PI" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Birth Day</label>
                                                <input type="date" className="form-control" placeholder="Birth Date"  defaultValue={getBDate()} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>Statut</label>
                                                <input type="text" className="form-control" placeholder="Statut" defaultValue="Buget" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="update ml-auto mr-auto" style={{ marginTop: '15px' }}>
                                            <button type="button" className="btn btn-primary btn-round" onClick={() => { }}>Update Profile</button>
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