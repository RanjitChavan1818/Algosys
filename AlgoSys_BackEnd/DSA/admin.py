from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Quiz

class CustomUserAdmin(UserAdmin):
    # Define the fields to display in the admin list view
    list_display = ('username', 'email', 'full_name', 'is_staff', 'is_active')
    ordering = ('username',)

    # Define fieldsets for editing a user in the admin detail view
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {
            'fields': (
                'full_name', 'email', 'user_class', 'roll_no', 
                'stream', 'dob', 'college_name', 'contact_number'
            )
        }),
        ('Permissions', {
            'fields': ('is_staff', 'is_active', 'groups', 'user_permissions')
        }),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    # Fields to show when creating a new user
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'full_name', 'password1', 'password2'),
        }),
    )


class QuizAdmin(admin.ModelAdmin):
    list_display = ('id', 'question', 'category', 'correctOption')
    list_filter = ('category',)
    search_fields = ('question',)
    fieldsets = (
        ('Question Info', {
            'fields': ('question', 'category')
        }),
        ('Options', {
            'fields': ('optionA', 'optionB', 'optionC', 'optionD', 'correctOption')
        }),
    )


# Register the custom user with the custom admin
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Quiz, QuizAdmin)

