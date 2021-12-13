from django.shortcuts import render,redirect
from django.http import JsonResponse
from .models import *
from django.core.paginator import Paginator,EmptyPage

# Create your views here.

def home(request):
    newsdata = lg_pro.objects.all()
    # articles per page
    per_page = 10
    # Paginator in a view function to paginate a queryset
    # show 4 news per page
    obj_paginator = Paginator(newsdata, per_page)
    # list of objects on first page
    first_page = obj_paginator.page(1).object_list
    
    
    page_range =  obj_paginator.page_range
    pages_range = page_range[-1]
    pages = pages_range

    context = {
    'obj_paginator':obj_paginator,
    'first_page':first_page,
    'page_range':page_range,
    'pages' : pages,
    }
    if request.method == 'POST':
        #getting page number
        page_no = request.POST.get('page_no', None) 
        results = list(obj_paginator.page(page_no).object_list.values('imaged','modeld','named','disd','sized','colord','categ'))
        return JsonResponse({"results":results})
    
    return render(request, 'app/home.html',context)