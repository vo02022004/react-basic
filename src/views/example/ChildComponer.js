import React from 'react';

class ChildComponer extends React.Component {
    state = {
        showJobs: false
    };
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    HandleDelete = (job) => {
        console.log("HandleDelete", job);
        this.props.DeleteJobs(job)
    }
    render() {
        // console.log('>>>>>>>>', this.props);
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {!showJobs
                    ?
                    <div><button onClick={() => this.handleShowHide()}>show</button></div>
                    :
                    <>
                        <div className='job-list'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></><span onClick={() => this.HandleDelete(item)}>x </span>
                                            {/* {console.log(item.id)} */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}
export default ChildComponer;