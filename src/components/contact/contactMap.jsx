function Map() {
    return (
        <div className="w-full max-w-5xl h-80 mx-auto rounded-xl overflow-hidden shadow-lg mb-30 mt-20">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Ahmedabad&output=embed"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
            />
        </div>
    );
}

export default Map;
