from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DSA', '0003_customuser_profile_image_alter_otp_expired_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='quiz',
            name='category',
            field=models.CharField(
                choices=[
                    ('linear-search', 'Linear Search'),
                    ('binary-search', 'Binary Search'),
                    ('bubble-sort', 'Bubble Sort'),
                ],
                default='linear-search',
                max_length=20
            ),
        ),
        migrations.AlterModelOptions(
            name='quiz',
            options={'ordering': ['category', 'id']},
        ),
    ]
