import { useState } from "react";
import {
	Link,
	useNavigate,
} from "react-router-dom";
import axios from "axios";

const AddStudent = () => {
	let navigate = useNavigate();
	const [student, setStudent] = useState({
		name: "",
		batch: "",
		department: "",
		phone: "",
		email: "",
		presentAddress: "",
		permanentAddress: "",
	});
	const {
		name,
		batch,
		department,
		phone,
        email,
        presentAddress,
        permanentAddress
	} = student;

	const handleInputChange = (e) => {
		setStudent({
			...student,
			[e.target.name]: e.target.value,
		});
	};
	const saveStudent = async (e) => {
		e.preventDefault();
		await axios.post(
			"http://localhost:8080/student",
			student
		);
		navigate("/view-students");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Add Student</h2>
			<form onSubmit={(e) => saveStudent(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="name">
						Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="name"
						id="name"
						required
						value={name}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="batch">
						Batch
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="batch"
						id="batch"
						required
						value={batch}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="department">
						Department
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="department"
						id="department"
						required
						value={department}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="phone">
						Phone
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="phone"
						id="phone"
						required
						value={phone}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="Email">
						Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="presentAddress">
						Present Address
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="presentAddress"
						id="presentAddress"
						value={presentAddress}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                <div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="permanentAddress">
						Permanent Address
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="permanentAddress"
						id="permanentAddress"
						value={permanentAddress}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
                

				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/view-students"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddStudent;