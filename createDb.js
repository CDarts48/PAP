import mysql from 'mysql2';

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YES', // Replace with your MySQL root password
  multipleStatements: true
});

// Connect to MySQL server
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL');

  // Create the property_management database and tables
  const createDBAndTables = `
    CREATE DATABASE IF NOT EXISTS property_management;
    USE property_management;

    CREATE TABLE IF NOT EXISTS Property (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      url VARCHAR(255), -- URL to the property report
      manager_name VARCHAR(255),
      contact_number VARCHAR(20),
      built_year YEAR,
      number_of_units INT
    );

    CREATE TABLE IF NOT EXISTS AccountTableData (
      id INT AUTO_INCREMENT PRIMARY KEY,
      property_id INT,
      label VARCHAR(50),
      actual DECIMAL(15, 2),
      assessed DECIMAL(15, 2),
      FOREIGN KEY (property_id) REFERENCES Property(id)
    );

    CREATE TABLE IF NOT EXISTS Unit (
      id INT AUTO_INCREMENT PRIMARY KEY,
      property_id INT,
      unit_number VARCHAR(50) NOT NULL,
      type VARCHAR(50), -- e.g., Studio, 1BHK, 2BHK
      rent DECIMAL(10, 2),
      lease_duration INT, -- Lease duration in months
      floor INT,
      is_occupied BOOLEAN DEFAULT false,
      FOREIGN KEY (property_id) REFERENCES Property(id)
    );

    CREATE TABLE IF NOT EXISTS Tenant (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE,
      phone_number VARCHAR(20),
      unit_id INT,
      move_in_date DATE,
      lease_duration INT, -- Lease duration in months
      rent DECIMAL(10, 2),
      water_submeter_serial VARCHAR(50), -- Water submeter information
      water_submeter_installation_date DATE,
      water_submeter_last_reading DECIMAL(10, 2),
      emergency_contact_name VARCHAR(255),
      emergency_contact_phone VARCHAR(20),
      FOREIGN KEY (unit_id) REFERENCES Unit(id)
    );

    CREATE TABLE IF NOT EXISTS Lease (
      id INT AUTO_INCREMENT PRIMARY KEY,
      tenant_id INT,
      unit_id INT,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      lease_type VARCHAR(50), -- e.g., Month-to-Month, Yearly
      monthly_rent DECIMAL(10, 2),
      security_deposit DECIMAL(10, 2),
      FOREIGN KEY (tenant_id) REFERENCES Tenant(id),
      FOREIGN KEY (unit_id) REFERENCES Unit(id)
    );

    CREATE TABLE IF NOT EXISTS Payment (
      id INT AUTO_INCREMENT PRIMARY KEY,
      tenant_id INT,
      amount DECIMAL(10, 2) NOT NULL,
      payment_date DATE NOT NULL,
      payment_type VARCHAR(50), -- e.g., Rent, Security Deposit
      FOREIGN KEY (tenant_id) REFERENCES Tenant(id)
    );

    CREATE TABLE IF NOT EXISTS Staff (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      role VARCHAR(50), -- e.g., Manager, Maintenance Worker
      phone_number VARCHAR(20),
      email VARCHAR(255),
      hire_date DATE,
      salary DECIMAL(10, 2)
    );

    CREATE TABLE IF NOT EXISTS MaintenanceRequest (
      id INT AUTO_INCREMENT PRIMARY KEY,
      unit_id INT,
      tenant_id INT,
      description TEXT,
      request_date DATE,
      status VARCHAR(50) DEFAULT 'Pending', -- e.g., Pending, In Progress, Completed
      assigned_to INT,
      FOREIGN KEY (unit_id) REFERENCES Unit(id),
      FOREIGN KEY (tenant_id) REFERENCES Tenant(id),
      FOREIGN KEY (assigned_to) REFERENCES Staff(id)
    );

    CREATE TABLE IF NOT EXISTS Utility (
      id INT AUTO_INCREMENT PRIMARY KEY,
      unit_id INT,
      utility_type VARCHAR(50), -- e.g., Electricity, Water, Gas
      provider_name VARCHAR(255),
      account_number VARCHAR(100),
      FOREIGN KEY (unit_id) REFERENCES Unit(id)
    );

    CREATE TABLE IF NOT EXISTS Document (
      id INT AUTO_INCREMENT PRIMARY KEY,
      lease_id INT,
      document_name VARCHAR(255),
      document_type VARCHAR(50), -- e.g., Lease Agreement, ID Proof
      upload_date DATE,
      document_url VARCHAR(255),
      FOREIGN KEY (lease_id) REFERENCES Lease(id)
    );
  `;

  connection.query(createDBAndTables, (err, results) => {
    if (err) {
      console.error('Error creating database or tables:', err.message);
    } else {
      console.log('Database and tables created successfully');
    }
    // Close the connection
    connection.end();
  });
});
