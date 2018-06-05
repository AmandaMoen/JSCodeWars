function abbrevName(name) {

	// We've recently learned about using let in place of var.
	// Split the names at the space.
	let splitNames = name.split(' ');
	// Grab the first letter of the first word/name.
	let initialFirstName = splitNames[0][0];
	// Grab the first letter of the second word/name.
	let initialLastName = splitNames[1][0];
	// We just learned about template literals.
	return `${initialFirstName}.${initialLastName}`.toUpperCase();
}	