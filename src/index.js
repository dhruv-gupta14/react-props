import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Ross" timeago="Today at 4:45PM" usercomment="Unagi!" userimage={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Rachel" timeago="Today at 3:45PM" usercomment="We were not on a break!" userimage={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Joey" timeago="Today at 2:45PM" usercomment="How you Doin!" userimage={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Chandler" timeago="Today at 12:45PM" usercomment="Could I be anymore funny!" userimage={faker.image.avatar()} />
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(< App />, document.querySelector('#root'));
