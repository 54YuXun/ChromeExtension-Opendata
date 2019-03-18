# import package
import pyodbc
import sqlalchemy as sa
# parameter
server = r""
database = r""
username = r""
password = r""
#function
def connect(server,database,username,password):   
    conStr = ('DRIVER={SQL Server Native Client 11.0};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
    try:        
        con = pyodbc.connect(conStr)
        massage = 'Success'
    except pyodbc.Error as ex:
        massage = 'Failed'
    return con, massage
def sqlengine(server,database,username,password):
    engine = sa.create_engine('mssql+pyodbc://'+username+':'+password+'@'+server+':1433/'+database+'?driver=SQL+Server+Native+Client+11.0')
    return engine
