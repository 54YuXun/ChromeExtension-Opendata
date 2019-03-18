import ssl
import pandas as pd
from . import sql_config as sql

# show dataframe
def dataframe(data):
    try:
        df = pd.read_csv(data,encoding ='utf-8')
        print('Encoding is utf-8.')
        return df
    except: 
        df = pd.read_csv(data,encoding ='big5')
        print('Encoding is big5.')
        return df

def main(data,tablename):

    ssl._create_default_https_context = ssl._create_unverified_context
    try:
        # print(dataframe(data))
        dataframe(data).to_sql(tablename, sql.sqlengine(sql.server,sql.database,sql.username,sql.password), if_exists='replace',index_label = 'Index')
        msg = 'Create Table Succeeded '
        print(msg)
        # return msg
    except:
        msg = 'Create Table Failed'
        print(msg)

# # show table which in your sql
# Query= '''
#     select * from '''+str(tablename)+'''  
# '''
# data = pd.read_sql(Query, sql.connect(sql.server,sql.database,sql.username,sql.password)[0])
# print(data)
# print(sql.sqlengine(sql.server,sql.database,sql.username,sql.password))