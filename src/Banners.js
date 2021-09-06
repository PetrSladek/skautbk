export function Banners({banners}) {
    return <div id="banners" className="container-fluid">
        <div className="row">
            {banners.map((banner, index) =>
                <a key={index} className="col-6 col-lg-12 banner" href={banner.url} target="_blank">
                    <img src={banner.image} width={banner.width} height={banner.height} />
                </a>
            )}
        </div>
    </div>;
}