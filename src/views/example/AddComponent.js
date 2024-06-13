import React from "react";
class AddComponent extends React.Component {
    state = {
        title: "",
        salary: ""
    };
    handleChangeTitleJobs = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmid = (event) => {
        event.preventDefault()
        this.props.addNewJob(
            {
                id: Math.floor(Math.random() * 100),
                title: this.state.title,
                salary: this.state.salary
            }
        )
    }
    render() {
        // console.log("check addCoponent", stateJobs);
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Jobs Title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJobs(event)}
                /><br />
                <label htmlFor="lname">Jobs salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br /><br />
                <input
                    type="submit"
                    value="Submit"
                    onClick={(event) => this.handleSubmid(event)} />
            </form>
        )
    }
}
export default AddComponent;