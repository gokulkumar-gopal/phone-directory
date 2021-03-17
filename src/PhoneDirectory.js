import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component {
    
    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'Shilpa Bhat',
                phone: '99999999'
            },
            {
                id: 2,
                name: 'Srishti Gupta',
                phone: '88888888'
            }]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length  - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscribersList : subscribersList});
        console.log(this.state.subscribersList);
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function(subscriber, index) {
            if(subscriber.id == subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribersList : newSubscribers});
    }

    render() {
        return(
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
            //<ShowSubscribers subscribersList={this.state.subscribersList} />
            <Router>
                <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
                <Route exact path='/add' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>} />
            </Router>
        )
    }
}

export default PhoneDirectory;