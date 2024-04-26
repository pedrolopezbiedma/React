const ProfileCard = ({ title, handle, image, description }) => {
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <figure class="image is-1by1">
                    <img src={image} alt="Image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{ title }</p>
                        <p class="subtitle is-6">{ handle }</p>
                    </div>
                    </div>
                    <div class="content">
                        <div>{ description }</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProfileCard;