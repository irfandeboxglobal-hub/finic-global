import re
import json

with open('/home/dmi7/harixis/assets/ServiceScopeEstimator-DzfixFin.js', 'r') as f:
    services_js = f.read()

# Let's see the keys of export object
print("Length of services_js:", len(services_js))
idx = services_js.find('software-development')
if idx != -1:
    print("Found software-development at:", idx)
    print(services_js[max(0, idx-50):idx+500])
