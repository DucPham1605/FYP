import Layout from '../components/Layout'
import RegisterComponent from '../components/RegisterComponent'
import Link from 'next/link'

const Register = () => {
	return (
		<Layout>
			<div className="container-fluid">
				<h1 className="text-center pt-4 pb-4">Register</h1>
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<RegisterComponent/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Register
