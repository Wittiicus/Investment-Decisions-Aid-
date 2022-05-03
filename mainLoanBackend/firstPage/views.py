from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

import joblib

model = joblib.load('modelPipeline.pkl')

def takeJson(formRequest):
    return JsonResponse({'score': 1})

def takeFile(fileRequest):
    return JsonResponse({'score': 1})
