// import Card from './cards/Card.jsx'

function Vehicles() {
    return (
        <>
          <main>
            <div>
            <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
            </div>
          </main>
        </>
      );
}

export default Vehicles