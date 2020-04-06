import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AppSpinner from '../spinner/spinner';
import { useGetDataLists } from './listing.utils.js';
import './listing.scss';

const DataList = () => {

  const { response, error, isLoading } = useGetDataLists();

  if (isLoading) {
    return <AppSpinner />
  }

  return (
    <Container className="datalists">
      <Row>
      {response.length !== 0 ?
        response.map(item => {
            const imgSrc = require(`../../assets/img/${item.thumb}`);
            return (
              <Col lg="6" key={item.id} >
                <div className="item-wrap">
                <div className='image'
                    style={{
                     backgroundImage: `url(${imgSrc})`
                    }}
                >
                    <div className="image-tag-rotate">
                      <span className="image-tag">{item.tag}</span>
                    </div>
                </div>
       
                
                <h3>{item.title_long}</h3> 
                <div className="link-wrap">
                  <a className="link" href={`/detail/${item.slug}`}>View Case Study</a>                
                </div>
                </div>
            </Col>
            )
        }
        )
       : "No Data Found"
      }   
      </Row>
    </Container>
  )
}

export default DataList