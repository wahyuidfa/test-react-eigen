import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsListAsync } from "../../redux/action";
import getNewsListReducer from "../../redux/reducers/getNewsListReducer";
import styles from "./newsList.module.css";
import {
    Spinner,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardText,
    Button,
    CardGroup,
} from "reactstrap";

function NewsList() {
    const dispatch = useDispatch();
    const { newsList, loading, error } = useSelector((state) => state.getNewsListReducer);

    console.log(newsList, "test");

    useEffect(() => {
        dispatch(getNewsListAsync());
    }, [dispatch]);
    return (
        <div className={styles.mainConatainer}>
            <div className={styles.newsContainer}>
                {loading ? (
                    <div>
                        
                            <Spinner color="primary" type="grow">
                                Loading...
                            </Spinner>
                            <Spinner color="secondary" type="grow">
                                Loading...
                            </Spinner>
                            <Spinner color="success" type="grow">
                                Loading...
                            </Spinner>
                            <Spinner color="danger" type="grow">
                                Loading...
                            </Spinner>
                            <Spinner color="warning" type="grow">
                                Loading...
                            </Spinner>
                            <Spinner color="info" type="grow">
                                Loading...
                            </Spinner>
                            <Spinner color="light" type="grow">
                                Loading...
                            </Spinner>
                            <Spinner color="dark" type="grow">
                                Loading...
                            </Spinner>
                        
                    </div>
                ) : (
                    ""
                )}

                {newsList.map((news) => (
                    <Card className={styles.Card} key={news.source.name}>
                        <CardImg alt="Card image cap" src={news.urlToImage} top width="100%" />
                        <CardBody style={{ margin: "0 10px" }}>
                            <CardTitle tag="h5">{news.title}</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                {news.publishedAt.slice(0, 10)}
                            </CardSubtitle>
                            <CardText>{news.content}</CardText>
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <Button
                                    style={{
                                        background: "white",
                                        border: "none",
                                        width: "100%",
                                        height: "30px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Read more
                                </Button>
                            </a>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default NewsList;
