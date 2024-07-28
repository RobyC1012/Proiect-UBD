import UserRoute from "../../components/routes/UserRoute"
import { Layout, Table, Select, Form } from "antd"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { toast } from "react-toastify"
import { getNamedRouteRegex } from "next/dist/shared/lib/router/utils/route-regex"

const { Header, Footer, Content } = Layout


const manageuser = () => {
    let [user, setUser] = useState([]);
    let [stud, setStud] = useState([]);
    const [specializations, setSpecializations] = useState([]);
    const [options, setOptions] = useState([]);

    const router = useRouter()

    useEffect(() => {
        fetchUrl()
    }, [])



    const fetchUrl = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const { data } = await axios.get(`/api/getuser/${id}`)
        setUser(data.user)
        setStud(data.stud)
        setSpecializations(data.specializations)
    }

    function getBDate(date) {
        date = new Date(date)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        if (day < 10)
            day = "0" + day
        if (month < 10)
            month = "0" + month
        return `${year}-${month}-${day}`
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if (user.role == "Student") {
            const { data } = await axios.put(`/api/updateuser/${id}`, {
                name: document.getElementById("ufname").value,
                lastName: document.getElementById("ulname").value,
                email: document.getElementById("uemail").value,
                role: document.getElementById("urole").value,
                address: document.getElementById("saddress").value,
                city: document.getElementById("scity").value,
                county: document.getElementById("scounty").value,
                postalCode: document.getElementById("spostalcode").value,
                pi: document.getElementById("spi").value,
                birthDate: document.getElementById("sbirthdate").value,
                statut: document.getElementById("sstatut").value,
                phone: document.getElementById("sphone").value,
                specialization: options,
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                toast.success("Student updated")
                //window.location.reload()
                router.back()
            }
        }
        else {
            const { data } = await axios.put(`/api/updateuser/${id}`, {
                name: document.getElementById("ufname").value,
                lastName: document.getElementById("ulname").value,
                email: document.getElementById("uemail").value,
                role: document.getElementById("urole").value,
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                router.back()
                toast.success("User updated")
            }
        }
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
                                                <input id="ufname" type="text" className="form-control" placeholder="Company" defaultValue={user.name} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input id="ulname" type="text" className="form-control" placeholder="Last Name" defaultValue={user.lastName} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input id="uemail" type="email" className="form-control" placeholder="Email" defaultValue={user.email} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label>Roles</label>
                                                <select id="urole" className="form-control">
                                                    {(user.role == "User") && (
                                                        <>
                                                            <option id="1" selected>User</option>
                                                            <option id="2">Student</option>
                                                            <option id="3">Teacher</option>
                                                            <option id="4">Admin</option>
                                                        </>
                                                    )}
                                                    {(user.role == "Student") && (
                                                        <>
                                                            <option id="1">User</option>
                                                            <option id="2" selected>Student</option>
                                                            <option id="3">Teacher</option>
                                                            <option id="4">Admin</option>
                                                        </>
                                                    )}
                                                    {(user.role == "Teacher") && (
                                                        <>
                                                            <option id="1">User</option>
                                                            <option id="2">Student</option>
                                                            <option id="3" selected>Teacher</option>
                                                            <option id="4">Admin</option>
                                                        </>
                                                    )}
                                                    {(user.role == "Admin") && (
                                                        <>
                                                            <option id="1">User</option>
                                                            <option id="2">Student</option>
                                                            <option id="3">Teacher</option>
                                                            <option id="4" selected>Admin</option>
                                                        </>
                                                    )}
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {(user.role == "Student") && (
                                    <>
                                        <div className="card-header">
                                            <h2 className="card-title">Student Information</h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <input id="saddress" type="text" className="form-control" placeholder="Home Address" defaultValue={stud.address} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 pr-1">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input id="scity" type="text" className="form-control" placeholder="City" defaultValue={stud.city} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 px-1">
                                                    <div className="form-group">
                                                        <label>County</label>
                                                        <input id="scounty" type="text" className="form-control" placeholder="County" defaultValue={stud.county} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 pl-1">
                                                    <div className="form-group">
                                                        <label>Postal Code</label>
                                                        <input id="spostalcode" type="number" className="form-control" placeholder="ZIP Code" defaultValue={stud.postalCode} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Parent Initial</label>
                                                        <input id="spi" type="text" className="form-control" placeholder="Parent Initial" defaultValue={stud.pi} />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Birth Day</label>
                                                        <input id="sbirthdate" type="date" className="form-control" placeholder="Birth Date" defaultValue={getBDate(stud.birthDate)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 pr-1">
                                                    <div className="form-group">
                                                        <label>Statut</label>
                                                        <input id="sstatut" type="text" className="form-control" placeholder="Statut" defaultValue="Buget" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 pr-1">
                                                    <div className="form-group">
                                                        <label>Phone Number</label>
                                                        <input id="sphone" type="text" className="form-control" placeholder="Phone" defaultValue={stud.phone} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 pr-1">
                                                    <div className="form-group">
                                                        <label>Specialization</label>
                                                        <Select
                                                            id="sspecialization"
                                                            placeholder="Select Specialization"
                                                            onChange={(e) => setOptions(e)}
                                                            showSearch
                                                            defaultValue={stud.specialization}
                                                            style={{ width: '50%' }}
                                                            filterOption={(input, option) =>
                                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                            }
                                                        >
                                                            {
                                                                specializations.map((s) => (
                                                                    <Select.Option key={s.name} value={s.name}>{s.name}</Select.Option>
                                                                ))
                                                            }

                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="row">
                                    <div className="update ml-auto mr-auto" style={{ margin: '15px' }}>
                                        <button type="submit" className="btn btn-primary btn-round" onClick={handleSubmit}>Update Profile</button>
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