import React from "react";
import { store } from "../../store";
import axios from "axios";
import Header from "../../components/author/Header";
import Coverimg from "../../components/author/Coverimg";
import Personal from "../../components/author/Personal";

class AuthorDetail extends React.Component {
    state = {
        data: {}
    };

    componentDidMount() {
        store.dispatch({ type: "UPDATE_TAB", payload: "yiyan" });
        console.log(this);
        const { id } = this.props.match.params;
        this.getDetial(id);
    }

    async getDetial(id) {
        return await axios.post(`https://api.jinyishe.cn/rest/authorInfo?authorId=${id}`).then(res => {
            let { data } = res.data;
            console.log(data);
            this.setState({
                data: data
            });
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Coverimg data={this.state.data} />
                <Personal data={this.state.data} id={this.props.match.params.id} />
            </div>
        );
    }
}
export default AuthorDetail;
