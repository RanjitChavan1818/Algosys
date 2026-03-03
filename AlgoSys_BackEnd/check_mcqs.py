from DSA.models import Quiz

print(f'Total MCQs: {Quiz.objects.count()}')
print('By category:')
for category in ['linear-search', 'binary-search', 'bubble-sort']:
    count = Quiz.objects.filter(category=category).count()
    print(f'{category}: {count}')
