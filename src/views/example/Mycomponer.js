import React from 'react';
import ChildComponer from './ChildComponer';
import AddComponent from './AddComponent';
class Mycomponer extends React.Component {
    state = {
        firstName: "vo",
        lastName: "Tu",
        arrJobs: [
            { id: 1, title: "deleper", salary: "2000" },
            { id: 2, title: "tester", salary: "2000" },
            { id: 3, title: "progaming manager", salary: "4000" }
        ]
    };

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    DeleteJobs = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }
    render() {
        console.log(this.state);
        return (
            <>
                {/* <button className='a'></button>
                <input value={this.state.name} type="text" onChange={(event) => this.handleOnchangeName(event)} />
                <div>
                    {this.state.name}
                </div>
                <div className='s'>hello word </div>
                <div className='third'>
                    <button onClick={this.delete}>click me</button>
                </div> */}
                <AddComponent addNewJob={this.addNewJob}>
                </AddComponent>
                <ChildComponer
                    name={this.state.firstName}
                    age={this.state.lastName}
                    arrJobs={this.state.arrJobs}
                    DeleteJobs={this.DeleteJobs}
                >
                </ChildComponer>
            </>
        )
    }
}
export default Mycomponer;