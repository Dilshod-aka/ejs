import { render } from 'sass';
import fs from 'fs';

function sassGenerator(scssFile, cssOutputFile) {
	render(
		{
			file: scssFile,
			outFile: cssOutputFile,
			sourceMap: true,
			outputStyle: 'expanded', // Change to 'expanded' for readable CSS output
		},
		(error, result) => {
			if (!error) {
				fs.writeFile(cssOutputFile, result.css, (writeError) => {
					if (!writeError) {
						console.log(
							`Successfully compiled SCSS to CSS: ${cssOutputFile}`,
						);
					} else {
						console.error('Error writing CSS file:', writeError);
					}
				});
			} else {
				console.error('Error compiling SCSS:', error);
			}
		},
	);
}

// Usage example
function sassTrigger() {
	let scssFile = './public/css/main.scss';
	let cssOutputFile = './public/css/main.css';

	sassGenerator(scssFile, cssOutputFile);
}

export { sassTrigger };
