import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
    constructor(props){
        super(props);
        this.state = {language: "spanish"};
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    changeLanguage(e){
        this.setState({language: e.target.value});
    }
    render(){
        return (
            <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

// what we're doing is creating a high order component that takes in a different component and some props as arguments and returns the same component with all the original props but also injects in a new prop called languageContext coming from LanguageContextConsumer, takes the value from LanguageContextConsumer and passes it as a prop. 

export const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
) 