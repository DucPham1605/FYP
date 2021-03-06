import Layout from '../../components/Layout';
import Admin from '../../components/Admin';
import AmendJournal from '../../components/Journal/AmendJournal';
import Link from 'next/link';

const UpdateJournal = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Update journal</h2>
                        </div>
                        <div className="col-md-12">
                            <AmendJournal />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default UpdateJournal;