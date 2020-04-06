import React from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import AppSpinner from '../spinner/spinner';
import { useGetDataDetail } from './data.detail.utils.js';
import './data.detail.scss';

const DataDetail = () => {
  let { slug } = useParams();
  const { content, error, isLoading } = useGetDataDetail(slug);

  if (isLoading) {
    return <AppSpinner />
  }
  console.log(content)
  const imgSrc = require(`../../assets/img/${content.image}`);
  return (
    <Container className="detaildata">
      <Row>
        <Col lg="6">
          <div className="item-wrap">
            <div className='image'
              style={{
                backgroundImage: `url(${imgSrc})`
              }}
            >
              <div className="image-tag-rotate">
                <span className="image-tag">{content.tag}</span>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="6">
          <div className="detail-wrap">
            <h1>{content.title_long}</h1>
            {content.questions.length !== 0 ?
              content.questions.map((item, index) => {
                  return (
                      <div className="qwrap">
                        <h4>Question {index + 1}</h4>
                        <div className="qtext">{item}</div>
                      </div>

                  )
              })
            : "No Questions"}   
          </div>
        </Col>        
      </Row>
    </Container>
  )
}

export default DataDetail