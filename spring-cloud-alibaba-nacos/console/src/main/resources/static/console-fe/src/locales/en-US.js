/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const I18N_CONF = {
  Header: {
    home: 'HOME',
    docs: 'DOCS',
    blog: 'BLOG',
    community: 'COMMUNITY',
    languageSwitchButton: '中',
    logout: 'logout',
    passwordRequired: 'password should not be empty',
    usernameRequired: 'username should not be empty',
  },
  Login: {
    login: 'Login',
    submit: 'Submit',
    pleaseInputUsername: 'Please input username',
    pleaseInputPassword: 'Please input password',
    invalidUsernameOrPassword: 'invalid username or password',
  },
  MainLayout: {
    nacosName: 'NACOS',
    doesNotExist: 'The page you visit does not exist',
    configurationManagementVirtual: 'ConfigManagement',
    configurationManagement: 'Configurations',
    configdetail: 'Configuration Details',
    configsync: 'Synchronize Configuration',
    configeditor: 'Edit Configuration',
    newconfig: 'Create Configuration',
    historyRollback: 'Historical Versions',
    configRollback: 'Configuration Rollback',
    historyDetail: 'History Details',
    listeningToQuery: 'Listening Query',
    serviceManagementVirtual: 'ServiceManagement',
    serviceManagement: 'Service List',
    serviceDetail: 'Service Details',
    namespace: 'Namespace',
    clusterManagementVirtual: 'ClusterManagement',
    clusterManagement: 'Cluster Node List',
  },
  NameSpace: {
    namespace: 'Namespaces',
    prompt: 'Notice',
    namespaceDetails: 'Namespace details',
    namespaceName: 'Name',
    namespaceID: 'ID:',
    configuration: 'Number of Configurations',
    description: 'Description',
    removeNamespace: 'Remove the namespace',
    confirmDelete: 'Sure you want to delete the following namespaces?',
    configurationManagement: 'Configurations',
    removeSuccess: 'Remove the namespace success',
    deletedSuccessfully: 'Deleted successfully',
    deletedFailure: 'Delete failed',
    namespaceDelete: 'Delete',
    details: 'Details',
    edit: 'Edit',
    namespacePublic: 'public(to retain control)',
    pubNoData: 'No results found.',
    namespaceAdd: 'Create Namespace',
    namespaceNames: 'Namespaces',
    namespaceNumber: 'Namespace ID',
    namespaceOperation: 'Actions',
  },
  ServiceList: {
    serviceList: 'Service List',
    serviceName: 'Service Name',
    serviceNamePlaceholder: 'Enter Service Name',
    query: 'Search',
    pubNoData: 'No results found.',
    columnServiceName: 'Service Name',
    groupName: 'Group Name',
    columnClusterCount: 'Cluster Count',
    columnIpCount: 'Instance Count',
    columnHealthyInstanceCount: 'Healthy Instance Count',
    operation: 'Operation',
    detail: 'Details',
    sampleCode: 'Code Example',
    deleteAction: 'Delete',
    prompt: 'Confirm',
    promptDelete: 'Do you want to delete the com.yuanxiaoyuan.springcloudalibabafeign.service?',
    create: 'Create Service',
  },
  ClusterNodeList: {
    clusterNodeList: 'Node List',
    nodeIp: 'NodeIp',
    nodeIpPlaceholder: 'Please enter node Ip',
    query: 'Search',
    pubNoData: 'No results found.',
    nodeState: 'NodeState',
    clusterTerm: 'ClusterTerm',
    leaderDueMs: 'LeaderDue(ms)',
    heartbeatDueMs: 'HeartbeatDue(ms)',
    voteFor: 'VoteFor',
  },
  EditClusterDialog: {
    updateCluster: 'Update Cluster',
    checkType: 'Check Type',
    checkPort: 'Check Port',
    useIpPortCheck: 'Use port of IP',
    checkPath: 'Check Path',
    checkHeaders: 'Check Headers',
    metadata: 'Metadata',
  },
  ServiceDetail: {
    serviceDetails: 'Service Details',
    back: 'Back',
    editCluster: 'Edit Cluster',
    cluster: 'Cluster',
    metadata: 'Metadata',
    selector: 'Selector',
    type: 'Type',
    groupName: 'Group Name',
    protectThreshold: 'Protect Threshold',
    serviceName: 'Service Name',
    editService: 'Edit Service',
  },
  EditServiceDialog: {
    createService: 'Create Service',
    updateService: 'Edit Service',
    serviceName: 'Service Name',
    metadata: 'Metadata',
    groupName: 'Group Name',
    type: 'Type',
    typeLabel: 'Label',
    typeNone: 'None',
    selector: 'Selector',
    protectThreshold: 'Protect Threshold',
    serviceNameRequired: 'Please enter a com.yuanxiaoyuan.springcloudalibabafeign.service name',
    protectThresholdRequired: 'Please enter a protect threshold',
  },
  InstanceTable: {
    operation: 'Operation',
    port: 'Port',
    weight: 'Weight',
    healthy: 'Healthy',
    metadata: 'Metadata',
    editor: 'Edit',
    offline: 'Offline',
    online: 'Online',
    ephemeral: 'Ephemeral',
  },
  EditInstanceDialog: {
    port: 'Port',
    weight: 'Weight',
    metadata: 'Metadata',
    updateInstance: 'Update Instance',
    whetherOnline: 'Whether Online',
  },
  ListeningToQuery: {
    success: 'Success',
    failure: 'Failure',
    configuration: 'Configuration',
    pubNoData: 'No results found.',
    listenerQuery: 'Listening Query',
    queryDimension: 'Dimension',
    pleaseEnterTheDataId: 'Enter Data ID',
    dataIdCanNotBeEmpty: 'Data ID cannot be empty',
    pleaseInputGroup: 'Enter Group',
    groupCanNotBeEmpty: 'Group cannot be empty',
    pleaseInputIp: 'Enter IP',
    query: 'Search',
    queryResultsQuery: 'Search Results: Found',
    articleMeetRequirementsConfiguration: 'configuration items.',
  },
  HistoryRollback: {
    details: 'Details',
    rollback: 'Roll Back',
    pubNoData: 'No results found.',
    toConfigure: 'Historical Versions (Configuration record is retained for 30 days.)',
    dataId: 'Enter Data ID',
    dataIdCanNotBeEmpty: 'Data ID cannot be empty',
    group: 'Enter Group',
    groupCanNotBeEmpty: 'Group cannot be empty',
    query: 'Search',
    queryResult: 'Search Results: Found',
    articleMeet: 'configuration items.',
    lastUpdateTime: 'Last Modified At',
    operation: 'Operation',
  },
  HistoryDetail: {
    historyDetails: 'History Details',
    update: 'Update',
    insert: 'Insert',
    deleteAction: 'Delete',
    recipientFrom: 'Collapse',
    moreAdvancedOptions: 'Advanced Options',
    home: 'Application:',
    actionType: 'Action Type:',
    configureContent: 'Configuration Content:',
    back: 'Back',
  },
  DashboardCard: {
    importantReminder0: 'Important reminder',
    viewDetails1: 'view details',
  },
  ConfigurationManagement: {
    questionnaire2: 'questionnaire',
    ad:
      'a ACM front-end monitoring questionnaire, the time limit to receive Ali cloud voucher details shoved stamp: the',
    noLongerDisplay4: 'no longer display:',
    removeConfiguration: 'Delete Configuration',
    sureDelete: 'Are you sure you want to delete the following configuration?',
    environment: 'Region:',
    configurationManagement: 'Configurations',
    details: 'Details',
    sampleCode: 'Code Example',
    edit: 'Edit',
    deleteAction: 'Delete',
    more: 'More',
    version: 'Historical Versions',
    listenerQuery: 'Configuration Listening Query',
    failedEntry: 'Failed Entry:',
    successfulEntry: 'Successful Entry:',
    unprocessedEntry: 'Unprocessed Entry:',
    pubNoData: 'No results found.',
    configurationManagement8: 'configuration management',
    queryResults: 'Search Results: Found',
    articleMeetRequirements: 'configuration items',
    fuzzyd: 'Enter Data ID',
    fuzzyg: 'Enter Group',
    query: 'Search',
    advancedQuery9: 'Advanced Query',
    application0: 'Application:',
    app1: 'Enter App Name\n',
    tags: 'Tags:',
    pleaseEnterTag: 'Enter Tag',
    application: 'Application',
    operation: 'Operation',
  },
  NewConfig: {
    newListingMain: 'Create Configuration',
    newListing: 'Create Configuration',
    publishFailed: 'Publish failed. Make sure parameters are entered correctly.',
    doNotEnte: 'Illegal characters not allowed',
    newConfig: 'Data ID cannot be empty.',
    dataIdIsNotEmpty: 'Data ID cannot exceed 255 characters in length',
    groupPlaceholder: 'Enter your group name',
    moreAdvanced: 'Group cannot be empty',
    groupNotEmpty: 'Group ID cannot exceed 127 characters in length',
    annotation:
      'Notice: You are going to add configuration to a new group, please make sure that the version of Pandora which clients are using is higher than 3.4.0, otherwise this configuration may be unreadable to clients.',
    dataIdLength: 'Collapse',
    collapse: 'Advanced Options',
    tags: 'Tags:',
    pleaseEnterTag: 'Enter Tag',
    groupIdCannotBeLonger: 'Application:',
    description: 'Description:',
    targetEnvironment: 'Format:',
    configurationFormat: 'Configuration Content',
    configureContentsOf: 'Press F1 to view in full screen',
    fullScreen: 'Press Esc to exit',
    escExit: 'Publish',
    release: 'Back',
    confirmSyanx: 'The configuration information may has a syntax error. Are you sure to submit?',
    dataIdExists: 'Configuration already exists. Enter a new Data ID and Group name.',
    dataRequired: 'Data cannot be empty, submission failed',
  },
  CloneDialog: {
    terminate: 'Terminate',
    skip: 'Skip',
    cover: 'Cover',
    getNamespaceFailed: 'get the namespace failed',
    selectedEntry: '| Selected Entry',
    homeApplication: 'Home Application:',
    tags: 'tags:',
    startCloning: 'Start Clone',
    source: 'Source :',
    configurationNumber: 'Items:',
    target: 'Target:',
    conflict: 'Conflict:',
    selectNamespace: 'Select Namespace',
    configurationCloning: 'Clone（',
  },
  DeleteDialog: {
    confManagement: 'Configuration Management',
    determine: 'OK',
    deletetitle: 'Delete Configuration',
    deletedSuccessfully: 'Configuration deleted',
    deleteFailed: 'Deleting configuration failed',
  },
  DiffEditorDialog: {
    publish: 'Publish',
    contents: 'Content Comparison',
    currentArea: 'Current Value',
    originalValue: 'Original Value',
  },
  ConfigEditor: {
    official: 'Official',
    wrong: 'Error',
    submitFailed: 'Cannot be empty, submit failed',
    toedittitle: 'Edit Configuration',
    toedit: 'Edit Configuration',
    vdchart: 'Illegal characters not allowed',
    recipientFrom: 'Data ID cannot be empty',
    homeApplication: 'Group name cannot be empty',
    collapse: 'Collapse',
    groupNotEmpty: 'Advanced Options',
    tags: 'Tags:',
    pleaseEnterTag: 'Enter Tag',
    targetEnvironment: 'Application:',
    description: 'Description:',
    format: 'Format:',
    configcontent: 'Configuration Content',
    escExit: 'Press F1 to view in full screen',
    releaseBeta: 'Press Esc to exit ',
    release: 'Beta Publish',
    publish: 'Publish',
    back: 'Back',
  },
  EditorNameSpace: {
    notice: 'Notice',
    pleaseDo: 'Illegal characters not allowed',
    publicSpace: 'OK',
    confirmModify: 'Edit Namespace',
    editNamespace: 'Loading...',
    load: 'Namespace:',
    namespace: 'Namespace cannot be empty',
    namespaceDesc: 'Namespace description cannot be empty',
    description: 'Description:',
  },
  ExportDialog: {
    selectedEntry: '| Selected Entry',
    application: 'Application:',
    tags: 'Tags:',
    exportBtn: 'Export',
    exportConfiguration: 'Export ( ',
    source: 'Source',
    items: 'Items:',
  },
  ImportDialog: {
    terminate: 'Terminate',
    skip: 'Skip',
    overwrite: 'Overwrite',
    zipFileFormat: 'Only upload. zip file format',
    uploadFile: 'Upload File',
    importLabel: 'Import ( ',
    target: 'Target:',
    conflict: 'Conflict:',
    beSureExerciseCaution: 'Caution: data will be imported directly after uploading.',
  },
  ShowCodeing: {
    sampleCode: 'Sample Code',
    loading: 'Loading...',
  },
  SuccessDialog: {
    title: 'Configuration Management',
    determine: 'OK',
    failure: 'Failed',
  },
  ConfigSync: {
    error: 'Error',
    syncConfigurationMain: 'Synchronize Configuration',
    syncConfiguration: 'Synchronize Configuration Successfully',
    advancedOptions: 'Advanced Options',
    collapse: 'Collapse',
    home: 'Application：',
    region: 'Region：',
    configuration: 'Configuration Content：',
    target: 'Target Region：',
    sync: 'Synchronize',
    back: 'Back',
  },
  NewNameSpace: {
    norepeat: 'Duplicate namespace. Please enter a different name.',
    notice: 'Notice',
    input: 'Illegal characters not allowed',
    ok: 'OK',
    cancel: 'Cancel',
    newnamespce: 'Create Namespace',
    loading: 'Loading...',
    name: 'Namespace:',
    namespacenotnull: 'Namespace cannot be empty',
    namespacedescnotnull: 'Namespace description cannot be empty',
    description: 'Description:',
  },
  NameSpaceList: {
    notice: 'Notice',
  },
  ConfigDetail: {
    official: 'Official',
    error: 'Error',
    configurationDetails: 'Configuration Details',
    collapse: 'Collapse',
    more: 'Advanced Options',
    home: 'Application:',
    tags: 'Tags:',
    description: 'Description:',
    betaRelease: 'Beta Publish:',
    configuration: 'Configuration Content:',
    back: 'Back',
  },
  ConfigRollback: {
    rollBack: 'Roll Back',
    determine: 'Are you sure you want to roll back',
    followingConfiguration: 'the following configuration?',
    configurationRollback: 'Configuration Rollback',
    collapse: 'Collapse',
    more: 'Advanced Options',
    home: 'Application:',
    actionType: 'Action Type:',
    configuration: 'Configuration Content:',
    back: 'Back',
    rollbackSuccessful: 'Rollback Successful',
    rollbackDelete: 'Delete',
    update: 'Update',
    insert: 'Insert',
  },
};

export default I18N_CONF;
