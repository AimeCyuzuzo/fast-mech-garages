import React from 'react'

export default function Skeleton() {
  return (
    <div>
        <div className="skeletonLoader">
        <div className="header"></div>
        <div className="underHeader"></div>
        <div className="longContent"></div>
        <div className="longContent1"></div>
        <div className="smallContent"></div>
        <div className="smallContent"></div>
    </div>


        <style jsx>
            {`
                
                .skeletonLoader{
                    margin: auto 20px;
                    max-width: 1200px;
                    background: white;
                }
                .skeletonLoader > div {
                    border-radius: 4px;
                    margin: 20px 0;
                }
                .skeletonLoader .header{
                    padding: 5%;
                    background: rgb(208, 208, 208);
                }
                .skeletonLoader .underHeader{
                    padding: 3% 0;
                    margin-right: 10%;
                    background: rgb(208, 208, 208);
                }
                .skeletonLoader .longContent{
                    margin-top: 5%;
                    padding: 2%;
                    background: rgb(208, 208, 208);
                }
                .skeletonLoader .longContent1{
                    padding: 2%;
                    background: rgb(208, 208, 208);
                }
                .skeletonLoader .smallContent{
                    padding: 2%;
                    background: rgb(208, 208, 208);
                    margin-right: 25%;
                }
            `}
        </style>
    </div>
  )
}
