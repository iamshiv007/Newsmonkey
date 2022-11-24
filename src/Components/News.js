import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  //Article,page or totalResults par useState hook lagaya
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // Function run after reandering matbal pahale return wali chije run hogi
  useEffect(() => {
    updatePage();
  }, []);

  //updataPage function
  const updatePage = async () => {
    console.log("success")
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=33cb6c37ddd74184a765f4f75f883257&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      //TotalResult pata kara
      settotalResults(parsedData.totalResults)
      setArticles(parsedData.articles);
    
  };

  //fetchMoreData function
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=33cb6c37ddd74184a765f4f75f883257&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <>
      {console.log(articles)}
      {/* //Top heading */}
      <div className="text-center my-4">
        <h1>Newsmonkey fast news</h1>
      </div>

      {/* //React infinite scroll  */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        //Agar sare article load ho jaye to hasMore ko false kar do
        hasMore={articles.length === totalResults ? false : true}
        // fetchMoreData function run hone par loading show kara
        loader={<Loading />}
        //Loading band hone par message show kara
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>"Bas Hogya Khatam"</b>
          </p>
        }
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                {/* //NewsItem component */}
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    {console.log("Failed")}
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
