import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class CamspiteInfo extends Component{
  

    renderCampsite(campsite) {
        return(
            <div class="col col-md-5">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments){
        if(comments){
            return(
                <div class="col col-md-5 m-1">
                    <h4>Comments</h4>
                        {comments.map(comment =>
                            <div key={comment.id}>
                                <div class="row">{comment.text}</div>
                                <div class="row form-group"> {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                            </div>
                        )}
                </div>
            )
        } else {
            return(
                <div></div>
            );
        }
    }

    render(){
        if(this.props.campsite){
            return(
                <div class="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

}
export default CamspiteInfo;