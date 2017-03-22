// Import React
import React from 'react';

class Details extends React.Component {
    // Render
    render() {
        return (
            <div className="details">
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}
// Export
export default Details
