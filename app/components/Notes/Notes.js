import React from 'react';

class Notes extends React.Component {
	render(){
		return (
        	<div>
            	<h3> Notes for {this.props.username} </h3>
            	<AddNote username={this.props.username} addNote={this.props.addNote} />
            	<NotesList notes={this.props.notes} />
            </div>
        )
	}
}
Notes.propTypes = {
	username: React.PropTypes.string.isRequired,
	notes: React.PropTypes.array.isRequired,
	addNote: React.PropTypes.func.isRequired,
}

class NotesList extends React.Component {
	render(){
		var notes = this.props.notes.map((note, index) => {
			return <li className="list-group-item" key={index}> {note} </li>
		});
		return(
			<ul className="list-group">
				{notes}
			</ul>
		);	
	}
}

class AddNote extends React.Component {
	handleSubmit() {
		var newNote = this.refs.note.getDOMNode().value;
		this.refs.note.getDOMNode().value = '';
		this.props.addNote(newNote);
	}
	render() {
		return(
			<div className="input-group">
				<input type="text" className="form-control" ref="note" placeholder="Add New Note" />
				<span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}> Submit </button>
				</span>
			</div>
		)
	}
}
AddNote.propTypes = {
		username: React.PropTypes.string.isRequired,
		addNote: React.PropTypes.func.isRequired,
};

export default Notes;