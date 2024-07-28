import UserRoute from "../components/routes/UserRoute";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const Dashboard = () => {

    const router = useRouter();
    const [user, setUser] = useState({});
    const [student, setStudent] = useState({});

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const { data } = await axios.get("/api/current-user");
            setUser(data.user);
            setStudent(data.stud);
        } catch (err) {
            console.log(err);
            router.push("/login");
        }
    };


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <UserRoute>
                <Content style={{ margin: '0px 16px 0', overflow: 'initial' }}>
                    <h2>Welcome, {user.name}!</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Personal Informations</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">First Name: {user.name}</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Last Name: {user.lastName}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Email: {user.email}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    student && (
                                        <>
                                <div className="card-header">
                                    <h5 className="card-title">Student Informations</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Address: {student.address}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">City: {student.city}</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">County: {student.county}</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Status: {student.statut}</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Specialization: {student.specialization}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Content>
            </UserRoute>
        </Layout>
    );
}

export default Dashboard;