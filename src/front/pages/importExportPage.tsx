//import { exportTasksToJSON, importTasks } from '../bdd/database';
import Colors from '../colors/colors';
import { useDarkMode } from '../contexts/darkModeContext';
import Navbar from '../components/navigation/navbar';
import { Alert, Button, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport, faFileImport } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import jsonImage from '../assets/JSON example.jpg';
import csvImage from '../assets/taskInCSV.jpg';
import { useDatabase, exportTasksToCSV, exportTasksToJSON, importTasks } from '../contexts/databaseContext';


const ImportExportPage = () => {
    const { isDarkMode } = useDarkMode();
    const [ alert, setAlert ] = useState<React.ReactNode | null>(null);
    const [selectedFormat, setSelectedFormat] = useState<string>('');    
    const [selectedFile, setSelectedFile] = useState<File>();
    const { updateDatabase } = useDatabase();
    const alertTimeout = 3000;

    const handleExport = () => {
        if (!selectedFormat) {
            setAlert(
              <Alert severity='error'>Please choose a format</Alert>
            );
            setTimeout(() => {
              setAlert(null);
            }, alertTimeout);
            return;
          }
      const success = selectedFormat === 'JSON' ? exportTasksToJSON() : exportTasksToCSV();
  
      if (success) {
        setAlert(
            <Alert severity="success" action={
                <Button color="inherit" size="small">
                    UNDO
                </Button>
            }>Export to {selectedFormat} successfully!</Alert>
        );
        setTimeout(() => {
            setAlert(null);
          }, alertTimeout);
      } else {
        setAlert(
            <Alert variant="outlined" onClose={() => {}} severity="error">Export to {selectedFormat} failed!</Alert>
        );
        setTimeout(() => {
            setAlert(null);
          }, alertTimeout);
      }
    };
    
    const checkImportFormat = (file: File) => {
        console.log('type : ',file.type);
        if (file.type !== 'application/json' && file.type !== 'text/csv') { return 0; }    
        else { return 1; }
    };
    

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    };

    const handleImport = async () => {
        try {
            if (selectedFile !== undefined) {
                console.log('format type : ', checkImportFormat(selectedFile));
                if (checkImportFormat(selectedFile) === 1) {
                    const importedTasks = await importTasks(selectedFile);
                    if (importedTasks.length > 0) {
                        setAlert(
                        <Alert severity="success" action={
                            <Button color="inherit" size="small">
                            UNDO
                            </Button>
                        }>Import successful!</Alert>
                        );
                        updateDatabase(importedTasks);
                        setTimeout(() => {
                        setAlert(null);
                        }, alertTimeout);
                    } else {
                        setAlert(
                        <Alert variant="outlined" onClose={() => { }} severity="error">Import failed!</Alert>
                        );
                        setTimeout(() => {
                        setAlert(null);
                        }, alertTimeout);
                    } 
                } else if (checkImportFormat(selectedFile) === 0){
                    <Alert variant="outlined" onClose={() => {}} severity="error"> Import a CSV or JSON file</Alert>
                    setTimeout(() => {
                        setAlert(null);
                    }, alertTimeout);
                }
            }
        } catch (error) {
          console.error('Error during import:', error);
        }
      };

    const handleFormat = (event: SelectChangeEvent) => {
        setSelectedFormat(event.target.value as string);
      };
    
    const colors = Colors();

    const divStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? colors.darkCharcoal : colors.beige,
        width: '100vw',
        height: '100vh',
        grid: 'true',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        justifyContent: 'center',
        marginTop: '40px',
        display: 'flex',
    };

    const contentStyle: React.CSSProperties = {
        display: 'flex',
        width: '80%',
    };

    const importDivStyle: React.CSSProperties = {
        width: '50%',
        border: '2px solid',
        borderColor: isDarkMode ? colors.amethyst : colors.coffee,
        borderRadius: '10px',
        marginRight: '10px',
    };

    const inputImportStyle: React.CSSProperties = {
        border: '1px solid',
        borderColor: isDarkMode ? colors.amethyst : colors.coffee,
        borderRadius: '10px',
        width: '80%',
        marginBottom: '10px',
        color: isDarkMode ? colors.bone : colors.black,
    };

    const exportDivStyle: React.CSSProperties = {
        width: '50%',
        border: '2px solid',
        borderColor: isDarkMode ? colors.amethyst : colors.coffee,
        borderRadius: '10px',
        marginLeft: '10px',
    };

    const titleStyle: React.CSSProperties = {
        color: isDarkMode ? colors.amethyst : colors.coffee,
    };

    const exportButtonStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? colors.darkSlateGray : colors.lightCoffee,
        color: isDarkMode ? colors.amethyst : colors.light,
        marginBottom: '10px',
        marginLeft: '10px',
    };

    const importButtonStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? colors.darkSlateGray : colors.lightCoffee,
        color: isDarkMode ? colors.amethyst : colors.light,
        marginBottom: '10px',
    };

    const alertStyle: React.CSSProperties = {
        position: 'fixed',
        bottom: '10px',
        right: '10px',
      };

    const jsonImageStyle: React.CSSProperties = {
        width: '40%',
        height: '40%',
    };

    const csvImageStyle: React.CSSProperties = {
        width: '80%',
        height: '15%',
    };

    const header4Style: React.CSSProperties = {
        color: isDarkMode ? colors.beige : colors.coffee,
    };

    return (
        <div style={divStyle}>
            <Navbar showSearchInput={false}/>
            <div style={contentStyle}>
                <div style={importDivStyle}>                        
                    <h3 style={titleStyle}><FontAwesomeIcon icon={faFileImport} /> Import </h3>  
                    <Input style={inputImportStyle} type='file' onChange={handleFileChange}/><br />
                    <Button style={importButtonStyle} onClick={handleImport}> Insert </Button>
                </div>
                <div style={exportDivStyle}>
                    <h3 style={titleStyle}><FontAwesomeIcon icon={faFileExport} /> Export </h3>
                    <FormControl style={{width: '30%'}}>
                    <InputLabel id="demo-simple-select-label">Format</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={selectedFormat}
                        label="Age"
                        onChange={handleFormat}
                    >
                        <MenuItem value='JSON'>JSON</MenuItem>
                        <MenuItem value='CSV'>CSV</MenuItem>
                    </Select>
                    </FormControl>
                    <Button onClick={handleExport} style={exportButtonStyle}> Export to {selectedFormat}</Button>
                    <h4 style={header4Style}> JSON format example :</h4> 
                    <img src={jsonImage} alt="JSON example" style={jsonImageStyle} />
                    <h4 style={header4Style}> CSV format example :</h4>
                    <img src={csvImage} alt="CSV example" style={csvImageStyle} />
                </div>
            </div>
            <footer>
            {alert && <div style={alertStyle}>{alert}</div>}
            </footer>
        </div>
    );
  };
  
  export default ImportExportPage;
  