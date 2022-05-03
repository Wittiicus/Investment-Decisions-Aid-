import json
import pandas as pd 
from django.shortcuts import render
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage
# Create your views here.

import joblib

model = joblib.load('modelPipeline.pkl')

def takeJson(formRequest):
    print (formRequest.body)
    data = json.loads(formRequest.body)
    dataFrm = pd.DataFrame({'x': data}).transpose()
    score = model.predict_proba(dataFrm)[:, -1][0]
    score = float(score)
    return JsonResponse({'score': 1})

def takeFile(fileRequest):
    fileObject = fileRequest.FILES['filePath']
    fs = FileSystemStorage() 
    filePathName = fs.save(fileObject.name, fileObject)
    filePathName = fs.url(filePathName)
    filePath = '.' + filePathName

    data = pd.read_csv(filePath)
    score = model.predict_proba(dataFrm)[:,-1]

    score = {j:k for j,k in zip(data['Loan ID'], score)}
    return JsonResponse({'score': 1})
