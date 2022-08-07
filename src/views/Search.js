import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const Search = (props) => {
    let navigate = useHistory();
    const [searchdata, setSearchdata] = useState([]);
    const query = props.location.state.query;
    console.log('query123', query)

    useEffect(() => {
        fetchdata();
    }, []);

    async function fetchdata() {
        axios.get(`http://localhost:3000/search`, { params: { q: query } })
            .then(res => {
                console.log(res);
                console.log(res.data);
                const data = res.data
                if (res.status == 200) {
                    console.log('datadata', data.data)
                    setSearchdata(data.data)
                } else {

                }
            })
    }

    const bookPage = () => {
        navigate.push('/detail');
      }

    return (
        <>
            <IndexNavbar fixed />
            <section className="header pt-24 flex h-screen max-h-860-px">
                <div className="container px-4 mx-auto">
                    {searchdata.length > 0 && searchdata.map((item) => (
                        <div className="flex flex-wrap" key={item.provider_id}>
                            <div className="w-8/12 px-4">
                                <span className="text-sm block my-4 p-3 text-blueGray-700">
                                <img src={require(`assets/vendor/${item.front_image}`).default} width="150px" />
                                </span>
                            </div>
                            <div className="w-8/12 px-4 flex-1">
                                <span className="text-sm block my-4 p-3 text-blueGray-700 rounded">
                                    <h4>{item.company_name}</h4>
                                </span>
                            </div>

                            <div className="w-8/12 px-4 flex-1">
                                <span className="text-sm block my-4 p-3 text-blueGray-700 rounded">
                                <Link
                  className="github-star text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  to={{pathname: `detail/${item.provider_id}`}}
                >
                 Book
                </Link>
                                </span>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Search;