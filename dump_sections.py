with open('/home/dmi7/harixis/assets/index-DBwAUCJe.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Find cS definition
idx = js.find('cS=')
if idx != -1:
    print("=== cS DEFINITION ===")
    print(js[max(0, idx-50):idx+3500])

# Find lS definition
idx2 = js.find('lS=[')
if idx2 != -1:
    print("\n=== lS DEFINITION ===")
    print(js[max(0, idx2-50):idx2+5000])
